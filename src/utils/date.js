import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

export function dateTimeFormat(datetime) {
  return dayjs(datetime).format("YYYY-MM-DD HH:mm:ss");
}
