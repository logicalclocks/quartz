export interface ActiveFile {
    type: string;
    href: string;
    zipState: string;
    attributes: {
        accessTime: string;
        dir: boolean;
        group: string;
        id: number;
        modificationTime: string;
        name: string;
        owner: string;
        parentId: number;
        path: string;
        permission: string;
        size: number;
        underConstruction: boolean;
    };
}
export type FileExplorData = {
    accepted?: boolean;
    attributes: {
        accessTime: string;
        dir: boolean;
        group: string;
        id: number;
        modificationTime: string;
        name: string;
        owner: string;
        parentId: number;
        path: string;
        permission: string;
        size: number;
        underConstruction: boolean;
    };
    datasetType?: string;
    description?: string;
    href: string;
    id?: number;
    name?: string;
    permission?: string;
    publicDataset?: number;
    searchable?: boolean;
    shared?: boolean;
    sharedWith?: number;
    type: string;
    tags: {
        href: string;
    };
    zipState?: string;
};
export declare enum FileExplorerMode {
    oneFile = "oneFile",
    nFiles = "nFiles",
    oneFolder = "oneFolder"
}
