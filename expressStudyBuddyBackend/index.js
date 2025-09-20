import express from "express";
import { supabase } from "./supabaseClient";

const app = express();
app.use(express.json());

