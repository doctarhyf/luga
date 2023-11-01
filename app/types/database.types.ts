export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      agents: {
        Row: {
          contrat: string | null;
          created_at: string;
          equipe: string | null;
          id: number;
          matricule: string | null;
          mingzi: string | null;
          nationalite: string | null;
          nom: string | null;
          phone: string | null;
          poste: string | null;
          postnom: string | null;
          prenom: string | null;
          section: string | null;
        };
        Insert: {
          contrat?: string | null;
          created_at?: string;
          equipe?: string | null;
          id?: number;
          matricule?: string | null;
          mingzi?: string | null;
          nationalite?: string | null;
          nom?: string | null;
          phone?: string | null;
          poste?: string | null;
          postnom?: string | null;
          prenom?: string | null;
          section?: string | null;
        };
        Update: {
          contrat?: string | null;
          created_at?: string;
          equipe?: string | null;
          id?: number;
          matricule?: string | null;
          mingzi?: string | null;
          nationalite?: string | null;
          nom?: string | null;
          phone?: string | null;
          poste?: string | null;
          postnom?: string | null;
          prenom?: string | null;
          section?: string | null;
        };
        Relationships: [];
      };
      chargement: {
        Row: {
          created_at: string | null;
          dureecharg: number | null;
          equipe: string;
          harrivee: string;
          hdebutcharg: string | null;
          hfincharg: string | null;
          id: number;
          phonechauff: string | null;
          plaque: string;
          sacs: number;
          shift: string;
          status: string;
          t: number;
          voie: number;
        };
        Insert: {
          created_at?: string | null;
          dureecharg?: number | null;
          equipe: string;
          harrivee?: string;
          hdebutcharg?: string | null;
          hfincharg?: string | null;
          id?: number;
          phonechauff?: string | null;
          plaque: string;
          sacs: number;
          shift?: string;
          status: string;
          t: number;
          voie?: number;
        };
        Update: {
          created_at?: string | null;
          dureecharg?: number | null;
          equipe?: string;
          harrivee?: string;
          hdebutcharg?: string | null;
          hfincharg?: string | null;
          id?: number;
          phonechauff?: string | null;
          plaque?: string;
          sacs?: number;
          shift?: string;
          status?: string;
          t?: number;
          voie?: number;
        };
        Relationships: [];
      };
      infos: {
        Row: {
          created_at: string;
          expiration_date: string | null;
          expired: boolean | null;
          id: number;
          text: string | null;
        };
        Insert: {
          created_at?: string;
          expiration_date?: string | null;
          expired?: boolean | null;
          id?: number;
          text?: string | null;
        };
        Update: {
          created_at?: string;
          expiration_date?: string | null;
          expired?: boolean | null;
          id?: number;
          text?: string | null;
        };
        Relationships: [];
      };
      load_shift: {
        Row: {
          created_at: string;
          dechires: number;
          HD: string | null;
          HF: string | null;
          id: number;
          shift_code: string;
          status: string | null;
        };
        Insert: {
          created_at?: string;
          dechires?: number;
          HD?: string | null;
          HF?: string | null;
          id?: number;
          shift_code: string;
          status?: string | null;
        };
        Update: {
          created_at?: string;
          dechires?: number;
          HD?: string | null;
          HF?: string | null;
          id?: number;
          shift_code?: string;
          status?: string | null;
        };
        Relationships: [];
      };
      luga_words: {
        Row: {
          active: boolean | null;
          created_at: string;
          fr: string | null;
          id: number;
          py: string | null;
          sw: string | null;
          zh: string | null;
        };
        Insert: {
          active?: boolean | null;
          created_at?: string;
          fr?: string | null;
          id?: number;
          py?: string | null;
          sw?: string | null;
          zh?: string | null;
        };
        Update: {
          active?: boolean | null;
          created_at?: string;
          fr?: string | null;
          id?: number;
          py?: string | null;
          sw?: string | null;
          zh?: string | null;
        };
        Relationships: [];
      };
      roulement: {
        Row: {
          created_at: string | null;
          data: string | null;
          id: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          data?: string | null;
          id?: number;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          data?: string | null;
          id?: number;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      trucks: {
        Row: {
          code_chargement: string | null;
          created_at: string;
          HA: string | null;
          HDC: string | null;
          HFC: string | null;
          id: number;
          line: number;
          nameChauff: string | null;
          numChauff: string;
          plaque: string;
          sacs: number;
          shift_code: string;
          state: string | null;
        };
        Insert: {
          code_chargement?: string | null;
          created_at?: string;
          HA?: string | null;
          HDC?: string | null;
          HFC?: string | null;
          id?: number;
          line: number;
          nameChauff?: string | null;
          numChauff: string;
          plaque: string;
          sacs: number;
          shift_code: string;
          state?: string | null;
        };
        Update: {
          code_chargement?: string | null;
          created_at?: string;
          HA?: string | null;
          HDC?: string | null;
          HFC?: string | null;
          id?: number;
          line?: number;
          nameChauff?: string | null;
          numChauff?: string;
          plaque?: string;
          sacs?: number;
          shift_code?: string;
          state?: string | null;
        };
        Relationships: [];
      };
      users_: {
        Row: {
          created_at: string;
          equipe: string | null;
          id: number;
          last_login: string | null;
          mingzi: string | null;
          nom: string | null;
          password: string | null;
          password_hint: string | null;
          phone: string;
          photo: string | null;
          prenom: string | null;
          user_type: string | null;
        };
        Insert: {
          created_at?: string;
          equipe?: string | null;
          id?: number;
          last_login?: string | null;
          mingzi?: string | null;
          nom?: string | null;
          password?: string | null;
          password_hint?: string | null;
          phone: string;
          photo?: string | null;
          prenom?: string | null;
          user_type?: string | null;
        };
        Update: {
          created_at?: string;
          equipe?: string | null;
          id?: number;
          last_login?: string | null;
          mingzi?: string | null;
          nom?: string | null;
          password?: string | null;
          password_hint?: string | null;
          phone?: string;
          photo?: string | null;
          prenom?: string | null;
          user_type?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
