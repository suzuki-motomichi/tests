/**
 * サークルイベント
 */
export type Event = {
  id: number;
  circle_id: number;
  sport_id: number;
  events_title: string;
  events_day: Date;
  events_time: string;
  events_place: string;
  events_people_limit_num: number;
  events_note_text: string;
  events_limit_answer_day: Date;
};
