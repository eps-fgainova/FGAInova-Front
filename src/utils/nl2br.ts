export function nl2br(html: string): string {
	return html.replace(/\r\n|\r|\n/g, '<br/>');
}