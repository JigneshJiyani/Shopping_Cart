import { selector } from "recoil";
import { currentContactState } from "../recoil/atmos";
import { getContacts, getDetails } from "../data/data";


export const contactsList = selector({
    key : "contactsList",
    get : async () => {
        const response = await getContacts();
        return response;
    },
});

export const currentContactsDetails = selector({
    key : "currentContactsDetails",
    get : async ({get}) => {
        const response = await getDetails(get(currentContactState));
        return response;
    },
});