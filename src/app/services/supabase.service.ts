import { Injectable } from '@angular/core';
import { supabaseConfig } from '@environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() { 
    this.supabase = createClient(supabaseConfig.supabaseUrl, supabaseConfig.supabaseKey)
  }

  // async SubscribeUser(body: any): Promise<any | null>{
  //   console.log(supabaseConfig.supabaseUrl)
  //   try {
  //     const {data, error} = await this.supabase
  //     .auth
  //     .signUp({
  //       email: body.email,
  //       password: body.password,
  //     })
  //     if (error) {
  //       console.error('Error al registrarse:', error.message);
  //     } else if (data.user) {
  //       const id = data.user.id
  //       const{data: dataProfile, error: errorProfile} = await this.supabase
  //         .from("profile")
  //         .insert({
  //             id: id,
  //             username: body.username,
  //             phone: body.phone
  //         })
  //       if (errorProfile ) {
  //         console.log(errorProfile)
            
  //       }else if(dataProfile){
  //         console.log(dataProfile)
  //       }      
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // } 
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

  Login(body: any): Observable<any | null> {
    return from(this.supabase.auth.signInWithPassword({ email: body.username, password: body.password })
      .then(async ({ data, error }) => {
        if (error) throw error;
        const { user: userData, session } = data;
        if (userData && session) {
          const { id } = userData;
          const { data: profile, error: profileError } = await this.supabase
            .from('profile')
            .select('*')
            .eq('id', id)
            .single();

          if (profileError) throw profileError;

          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('token', session.access_token);
          localStorage.setItem('user', JSON.stringify(userData));

          return profile;  // Devuelve el perfil si el login es exitoso
        }
        return null;
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
        return null;
      })
    );
  }
}
