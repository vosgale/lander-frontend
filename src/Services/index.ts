export const List = async () =>
  fetch("http://localhost:3002/contacts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const Create = async (body: any) =>
  fetch("http://localhost:3002/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

export const Edit = async (body: any, id: number) =>
  fetch(`http://localhost:3002/contacts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  export const Delete = async (id: number) =>
  fetch(`http://localhost:3002/contacts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

