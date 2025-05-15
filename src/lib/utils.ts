import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "@/firebase";
import {ProjectItem, ServiceItem, WorkItem} from "@/types/firebaseTypes";

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

export const fetchExp = async (): Promise<WorkItem[]> => {
    const snapshot = await getDocs(collection(db, "work-ex"));
    return snapshot.docs.map(doc => {
        const data = doc.data() as Omit<WorkItem, 'id'>;
        return {
            id: doc.id,
            ...data,
        };
    });
};

export const fetchProjects = async (): Promise<ProjectItem[]> => {
    const snapshot = await getDocs(collection(db, "projects"));
    return snapshot.docs.map(doc => {
        const data = doc.data() as Omit<ProjectItem, 'id'>;
        return {
            id: doc.id,
            ...data,
        };
    });
};

export const fetchServices = async (): Promise<ServiceItem[]> => {
    const snapshot = await getDocs(collection(db, "services"));
    return snapshot.docs.map(doc => {
        const data = doc.data() as Omit<ServiceItem, 'id'>;
        return {
            id: doc.id,
            ...data,
        };
    });
};

export const formatDate = (dateString: string): string => {
    const date = dateString.split("T");

    let newDate = date[0];

    let month = newDate.split("-")[1];

    switch (month) {
        case "01":
            month = "Jan";
            break;
        case "02":
            month = "Feb";
            break;
        case "03":
            month = "Mar";
            break;
        case "04":
            month = "Apr";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "Jun";
            break;
        case "07":
            month = "Jul";
            break;
        case "08":
            month = "Aug";
            break;
        case "09":
            month = "Sep";
            break;
        case "10":
            month = "Oct";
            break;
        case "11":
            month = "Nov";
            break;
        case "12":
            month = "Dec";
            break;
        default:
            month = "Invalid";
    }

    return `${newDate.split("-").reverse()[0]} ${month}, ${newDate.split("-")[0]}`;
}