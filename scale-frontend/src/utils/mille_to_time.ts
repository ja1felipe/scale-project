export function msToTime(duration: number): string {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  let convert_hours = hours < 10 ? 0 + hours : hours;
  let convert_minutes = minutes < 10 ? 0 + minutes : minutes;
  let convert_seconds = seconds < 10 ? 0 + seconds : seconds;

  return convert_hours > 0
    ? convert_hours + 'h' + convert_minutes + 'm' + convert_seconds + 's'
    : convert_minutes + 'm' + convert_seconds + 's';
}
