export const GLOBAL_SETTINGS = {
    WAITING_TIME_FOR_ELEMENTS: 5000,
};

export enum VirtualJournalPublication {
    BIOCOMP = 'biocomp',
    RFIC = 'rfic',
    RFID = 'rfid'
  };

  export const documentsGetProgramStandards: number[] = [
    815311,
    6130556
  ];



  export interface User {
    username: string;
    password: string;
    types: UserType[];
  }
  
  export enum UserType {
    IEL = 'iel',
    INST = 'institution',
    WEB = 'web'
  }
  
  export const users: User[] = [
    {
      username: 'fakesampleusername1',
      password: 'fakesampleusername1',
      types: [UserType.IEL, UserType.INST]
    },
    {
      username: 'fakesampleusername2',
      password: 'fakesampleusername2',
      types: [UserType.WEB]
    }
  ];
  
  export const instUsers: User[] = users.filter((user) => {
    return user.types.some(type => type === UserType.INST);
  });
  
  export const webUsers: User[] = users.filter((user) => {
    return user.types.some(type => type === UserType.WEB);
  });