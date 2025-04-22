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