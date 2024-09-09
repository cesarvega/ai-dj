import { Injectable } from '@angular/core';
import { supabaseConfig } from '@environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() { 
    this.supabase = createClient(supabaseConfig.supabaseUrl, supabaseConfig.supabaseKey)
  }

  async SubscribeUser(body: any): Promise<any | null>{
    console.log(supabaseConfig.supabaseUrl)
    try {
      const {data, error} = await this.supabase
    .auth
    .signUp({
      email: body.email,
      password: body.password,
    })
    if (error) {
      console.error('Error al registrarse:', error.message);
    } else if (data.user) {
      const id = data.user.id
      const{data: dataProfile, error: errorProfile} = await this.supabase
        .from("profile")
        .insert({
          id: id,
          username: body.username,
          phone: body.phone
        })
      if (errorProfile ) {
        console.log(errorProfile)
        
      }else if(dataProfile){
        console.log(dataProfile)
      }
        
      



    }
    } catch (error) {
      console.log(error)
    }
    
  }



}
