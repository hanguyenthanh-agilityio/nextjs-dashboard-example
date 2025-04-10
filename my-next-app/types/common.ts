export type Course = {
  title: string;
  lessons: number;
  progress: number;
  bgColor: string;
  icon: string;
  width: number;
  height: number;
};

export type Planning = {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  time: string;
};

export type Statistic = {
  label: string;
  value: number;
};

export type Activity = {
  name: string;
  value: number;
};

export type ActivityData = {
  Day: Activity[];
  Week: Activity[];
  Month: Activity[];
};
