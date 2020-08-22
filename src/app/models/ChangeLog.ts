export class ChangeLog {
  constructor(version: string, date: string, features: string[], bugFixes: string[]) {
    this.version = version;
    this.date = date;
    this.features = features;
    this.bugFixes = bugFixes;
  }

  version: string;
  date: string;
  features: string[];
  bugFixes: string[];
}
