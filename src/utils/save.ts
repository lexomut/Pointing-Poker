import exportFromJSON from 'export-from-json';
import { Issue } from '../types/game';

export function IssueIssueToCSV(issues: Issue[]): void {
    const result: Array<string[]> = [];
    issues.forEach((issue) => {
        result.push([issue.name, issue.priority, issue.link || '', issue.score]);
    });
    const fileName = 'download';
    const exportType = 'csv';

    exportFromJSON({ data: result, fileName, exportType });
}
