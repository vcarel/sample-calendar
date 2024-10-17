export const defaultLocale = globalThis.navigator.language.startsWith("fr")
	? globalThis.navigator.language
	: "fr-FR";

const formatShortDayOfWeekWithDot = new Intl.DateTimeFormat(defaultLocale, {
	weekday: "short",
}).format;

const formatDayShortMonthWithDot = new Intl.DateTimeFormat(defaultLocale, {
	day: "numeric",
	month: "short",
}).format;

/** e.g. Jeu. */
export const formatShortWeekDay = (date: Date) =>
	formatShortDayOfWeekWithDot(date).replace(".", "");

/** e.g. 25 Juil */
export const formatDayShortMonth = (date: Date) =>
	formatDayShortMonthWithDot(date).replace(".", "");

/** e.g. 08:30 */
export const formatHourMinute = new Intl.DateTimeFormat(defaultLocale, {
	hour: "numeric",
	minute: "numeric",
	hour12: false,
}).format;
