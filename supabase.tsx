import { supabaseClient, supabaseTableItems } from "https://deno.land/x/supabase_deno@v1.0.5/mod.ts";

const sbclient = new supabaseClient("https://xzqqlvndzjzyhdhfzxmx.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6cXFsdm5kemp6eWhkaGZ6eG14Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NzkxNjEyMSwiZXhwIjoxOTgzNDkyMTIxfQ.Av2nbf3cOllLOerZWSKsiOIE6EVjtFFVOnriCbzBj88");

export const addData = async (data: any) => {
    const sbTableItems = new supabaseTableItems(sbclient, "quixada");
    const result = await sbTableItems.add(data);
    return result;
}

export const getData = async (game_id: string) => {
    const sbTableItems = new supabaseTableItems(sbclient, "quixada");
    return await sbTableItems.get("game_id", game_id)
}