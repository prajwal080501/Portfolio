export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'jobTitle',
        title: 'JobTitle',
        type: 'string',
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'companyImage',
        title: 'CompanyImage',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string',
      },
      {
        name: 'dateStarted',
        title: 'DateStarted',
        type: 'date',
      },
      {
        name: 'dateEnded',
        title: 'DateEnded',
        type: 'date',
      },
      {
        name: 'isCurrentlyWorkingHere',
        title: 'SsCurrentlyWorkingHere',
        type: 'boolean',
      },
      {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{type: 'reference', to: { type: 'skill'}}]
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'points',
        title: 'Points',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  }