import { FileExplorData } from './types';

const testData: FileExplorData[][] = [
  [
    {
      type: 'datasetDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/Logs',
      accepted: true,
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__Logs',
        id: 29551,
        modificationTime: '2022-03-08T11:04:26.841Z',
        name: 'Logs',
        owner: 'Admin Admin',
        parentId: 29550,
        path: '/Projects/n_0/Logs',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      datasetType: 'DATASET',
      description:
        'Contains the logs for jobs that have been run through the Hopsworks platform.',
      id: 3257,
      name: 'Logs',
      permission: 'EDITABLE',
      publicDataset: 0,
      searchable: false,
      shared: false,
      sharedWith: 0,
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/Logs?datasetType=DATASET',
      },
    },
    {
      type: 'datasetDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/Resources',
      accepted: true,
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__Resources',
        id: 29560,
        modificationTime: '2022-03-08T11:05:24.312Z',
        name: 'Resources',
        owner: 'Admin Admin',
        parentId: 29550,
        path: '/Projects/n_0/Resources',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      datasetType: 'DATASET',
      description: 'Contains resources used by jobs, for example, jar files.',
      id: 3258,
      name: 'Resources',
      permission: 'EDITABLE',
      publicDataset: 0,
      searchable: false,
      shared: false,
      sharedWith: 0,
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/Resources?datasetType=DATASET',
      },
    },
    {
      type: 'datasetDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/Experiments',
      accepted: true,
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__Experiments',
        id: 29564,
        modificationTime: '2022-03-08T11:04:28.661Z',
        name: 'Experiments',
        owner: 'Admin Admin',
        parentId: 29550,
        path: '/Projects/n_0/Experiments',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      datasetType: 'DATASET',
      description: 'Contains experiments from using the hops python api',
      id: 3259,
      name: 'Experiments',
      permission: 'EDITABLE',
      publicDataset: 0,
      searchable: true,
      shared: false,
      sharedWith: 0,
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/Experiments?datasetType=DATASET',
      },
    },
    {
      type: 'datasetDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/Jupyter',
      accepted: true,
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__Jupyter',
        id: 29566,
        modificationTime: '2022-03-08T11:04:30.175Z',
        name: 'Jupyter',
        owner: 'Admin Admin',
        parentId: 29550,
        path: '/Projects/n_0/Jupyter',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      datasetType: 'DATASET',
      description: 'Contains Jupyter notebooks.',
      id: 3260,
      name: 'Jupyter',
      permission: 'EDITABLE',
      publicDataset: 0,
      searchable: true,
      shared: false,
      sharedWith: 0,
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/Jupyter?datasetType=DATASET',
      },
    },
    {
      type: 'datasetDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/n_0.db',
      accepted: true,
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__n_0.db',
        id: 29568,
        modificationTime: '2022-03-08T11:04:31.096Z',
        name: 'n_0.db',
        owner: 'Admin Admin',
        parentId: 304,
        path: '/apps/hive/warehouse/n_0.db',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      datasetType: 'HIVEDB',
      id: 3261,
      name: 'n_0.db',
      permission: 'EDITABLE',
      publicDataset: 0,
      searchable: true,
      shared: false,
      sharedWith: 0,
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/n_0.db?datasetType=HIVEDB',
      },
    },
    {
      type: 'datasetDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/n_0_Training_Datasets',
      accepted: true,
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__n_0_Training_Datasets',
        id: 29569,
        modificationTime: '2022-03-08T11:04:32.305Z',
        name: 'n_0_Training_Datasets',
        owner: 'Admin Admin',
        parentId: 29550,
        path: '/Projects/n_0/n_0_Training_Datasets',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      datasetType: 'DATASET',
      description:
        'Contains curated training datasets created from the feature store',
      id: 3262,
      name: 'n_0_Training_Datasets',
      permission: 'EDITABLE',
      publicDataset: 0,
      searchable: true,
      shared: false,
      sharedWith: 0,
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/n_0_Training_Datasets?datasetType=DATASET',
      },
    },
    {
      type: 'datasetDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/n_0_featurestore.db',
      accepted: true,
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__n_0_featurestore.db',
        id: 29571,
        modificationTime: '2022-03-08T11:04:33.269Z',
        name: 'n_0_featurestore.db',
        owner: 'Admin Admin',
        parentId: 304,
        path: '/apps/hive/warehouse/n_0_featurestore.db',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      datasetType: 'FEATURESTORE',
      id: 3263,
      name: 'n_0_featurestore.db',
      permission: 'EDITABLE',
      publicDataset: 0,
      searchable: true,
      shared: false,
      sharedWith: 0,
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/n_0_featurestore.db?datasetType=FEATURESTORE',
      },
    },
    {
      type: 'datasetDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/DataValidation',
      accepted: true,
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__DataValidation',
        id: 29572,
        modificationTime: '2022-03-08T11:04:34.797Z',
        name: 'DataValidation',
        owner: 'Admin Admin',
        parentId: 29550,
        path: '/Projects/n_0/DataValidation',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      datasetType: 'DATASET',
      description: 'Contains rules and results for Features validation',
      id: 3264,
      name: 'DataValidation',
      permission: 'EDITABLE',
      publicDataset: 0,
      searchable: true,
      shared: false,
      sharedWith: 0,
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/DataValidation?datasetType=DATASET',
      },
    },
    {
      type: 'datasetDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/Statistics',
      accepted: true,
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__Statistics',
        id: 29574,
        modificationTime: '2022-03-08T11:04:35.522Z',
        name: 'Statistics',
        owner: 'Admin Admin',
        parentId: 29550,
        path: '/Projects/n_0/Statistics',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      datasetType: 'DATASET',
      description:
        'Contains the statistics for feature groups and training datasets',
      id: 3265,
      name: 'Statistics',
      permission: 'EDITABLE',
      publicDataset: 0,
      searchable: false,
      shared: false,
      sharedWith: 0,
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/Statistics?datasetType=DATASET',
      },
    },
  ],
  [
    {
      type: 'inodeDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/Projects/n_0/Resources/.sparkStaging',
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__Resources',
        id: 29561,
        modificationTime: '2022-03-08T11:04:27.633Z',
        name: '.sparkStaging',
        owner: 'Admin Admin',
        parentId: 29560,
        path: '/Projects/n_0/Resources/.sparkStaging',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/Resources?datasetType=DATASET',
      },
      zipState: 'NONE',
    },
    {
      type: 'inodeDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/Projects/n_0/Resources/spark-warehouse',
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__Resources',
        id: 29562,
        modificationTime: '2022-03-08T11:04:27.735Z',
        name: 'spark-warehouse',
        owner: 'Admin Admin',
        parentId: 29560,
        path: '/Projects/n_0/Resources/spark-warehouse',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/Resources?datasetType=DATASET',
      },
      zipState: 'NONE',
    },
    {
      type: 'inodeDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/Projects/n_0/Resources/.python',
      attributes: {
        accessTime: '1970-01-01T00:00:00Z',
        dir: true,
        group: 'n_0__Resources',
        id: 29576,
        modificationTime: '2022-03-08T11:05:24.312Z',
        name: '.python',
        owner: 'Admin Admin',
        parentId: 29560,
        path: '/Projects/n_0/Resources/.python',
        permission: 'rwxrwx---',
        size: 0,
        underConstruction: false,
      },
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/Resources?datasetType=DATASET',
      },
      zipState: 'NONE',
    },
    {
      type: 'inodeDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/Projects/n_0/Resources/README.md',
      attributes: {
        accessTime: '2022-03-08T11:04:27.783Z',
        dir: false,
        group: 'n_0__Resources',
        id: 29563,
        modificationTime: '2022-03-08T11:04:28.259Z',
        name: 'README.md',
        owner: 'Admin Admin',
        parentId: 29560,
        path: '/Projects/n_0/Resources/README.md',
        permission: 'rwxr-x---',
        size: 211,
        underConstruction: false,
      },
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/Resources?datasetType=DATASET',
      },
      zipState: 'NONE',
    },
  ],
  [
    {
      type: 'inodeDTO',
      href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/Projects/n_0/Resources/.python/environment.yml',
      attributes: {
        accessTime: '2022-03-08T11:05:24.312Z',
        dir: false,
        group: 'n_0__Resources',
        id: 29577,
        modificationTime: '2022-03-08T11:05:24.778Z',
        name: 'environment.yml',
        owner: 'Admin Admin',
        parentId: 29576,
        path: '/Projects/n_0/Resources/.python/environment.yml',
        permission: 'rw-rw----',
        size: 6584,
        underConstruction: false,
      },
      tags: {
        href: 'http://localhost:8080/hopsworks-api/api/project/1308/dataset/tags/all/Resources/.python?datasetType=DATASET',
      },
      zipState: 'NONE',
    },
  ],
];

export default testData;