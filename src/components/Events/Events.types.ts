export type GoogleEvent = {
  kind: string;
  etag: string;
  id: string;
  status: string;
  htmlLink: string;
  created: string;
  updated: string;
  summary: string;
  colorId: string;
  creator: {
    email: string;
    self: boolean;
  };
  organizer: {
    email: string;
    self: boolean;
  };
  start: {
    date?: string;
    dateTime?: string;
  };
  end: {
    date: string;
  };
  transparency: string;
  iCalUID: string;
  sequence: number;
  reminders: {
    useDefault: boolean;
    overrides: [
      {
        method: string;
        minutes: number;
      },
    ];
  };
};
