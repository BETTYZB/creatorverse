import { createClient } from "@supabase/supabase-js";

const URL = "https://ddhzehwobtngnkbpcwvl.supabase.co";
const API_KEY = "sb_publishable_vTjYMeTzPDTw0B_WeBKiRg_4idgbw-L";

export const supabase = createClient(URL, API_KEY);
