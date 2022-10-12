// License: 0BSD
/**
 * @typedef ds Options for how to render dates
 * @prop {Date} [date] Date to provide.
 * @prop {boolean} [short] Provide short output.
 */
interface opt {
  date?: boolean; // input date
  short?: boolean; // output
}

/**
 * @typedef ds
 * @prop {string} long Full name of the day/season (e.g, 'Sweetmorn')
 * @prop {string} long Abbrivated version of the day/season (e.g, 'SM')
 */
interface ds {
  long: string;
  short: string;
}

const days: ds[] = [
  {
    long: "Sweetmorn",
    short: "SM",
  },
  {
    long: "Boomtime",
    short: "BT",
  },
  {
    long: "Pungenday",
    short: "PD",
  },
  {
    long: "Prickle-Prickle",
    short: "PP",
  },
  {
    long: "Setting Orange",
    short: "SO",
  },
];

const seasons: ds[] = [
  {
    long: "Chaos",
    short: "Chs",
  },
  {
    long: "Discord",
    short: "Dsc",
  },
  {
    long: "Confusion",
    short: "Cfn",
  },
  {
    long: "Bureaucracy",
    short: "Bcy",
  },
  {
    long: "The Aftermath",
    short: "Afm",
  },
];

const hollydays = [
  ["Mungday", "Chaoflux"],
  ["Mojoday", "Discoflux"],
  ["Syaday", "Confuflux"],
  ["Zaraday", "Bureflux"],
  ["Maladay", "Afflux"],
];

// Helper functions
const getDate = (x: number) => (x) % 73 == 0 ? 73 : (x) % 73;
const leapYear = (x: number) => (x) % 400 == 0 || (((x) % 4) == 0 && (x) % 100);

// Get total number of days that have so far passed this year.
// Stolen from https://stackoverflow.com/a/40975730/19832997
function dayYear(date: Date) {
  return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
    Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

export default function ddate(options?: opt) {
  let inpDate: Date = new Date();

  if (options !== undefined && options.date) {
    inpDate = new Date(options.date);
  }

  let fmt = "long";

  if (options && options.short) {
    fmt = "short";
  }

  const m = inpDate.getMonth() + 1;
  const y = inpDate.getFullYear();
  let d = dayYear(inpDate);

  let leapDay = 0;
  let dw = "";

  if (leapYear(y)) {
    if (d == 60) {
      dw = "St. Tib's Day";
      leapDay = 1;
    } else if (d > 60) {
      d--;
    }
  }

  const dd = getDate(d);
  const dy = y + 1166;
  const ds = seasons[Math.floor(((d % 73) == 0 ? d - 1 : d) / 73)][fmt];

  if (leapDay == 1) {
    return `${dw} of ${ds}, YOLD ${dy}`;
  } else if (dd == 5 || dd == 50) {
    return `${
      hollydays[dd][((d % 73) == 0 ? d - 1 : d) / 73]
    }, ${dd} of ${ds}, YOLD ${dy}`;
  } else {
    return `${days[(d - 1) % 5][fmt]}, ${dd} of ${ds}, YOLD ${dy}`;
  }
}
