const contacts = [
    {
      id: 1,
      name: "Jignesh Jiyani",
      address: "Ahmedabad, Nikol",
      phone: "98983 80654",
      email: "jigs31@gmail.com",
    },
    {
      id: 2,
      name: "Lalji Jiyani",
      address: "Babra, Amreli",
      phone: "99795 73472",
      email: "lalji23@gmail.com",
    },
    {
      id: 3,
      name: "Jaydip Jiyani",
      address: "Khijadiya, Babra,Amreli",
      phone: "87802 11765",
      email: "jaydip13@gmail.com",
    },
  ];
  
  export const getContacts = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          contacts.map((contact) => ({ id: contact.id, name: contact.name }))
        );
      }, 2000);
    });
  
  export const getDetails = (id) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(contacts.filter((contact) => contact.id === id)[0]);
      }, 2000);
    });