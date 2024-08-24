import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AiStore } from '@app/store/ai.store';

export const authGuard: CanActivateFn = (route, state) => {
  const aiStore = inject(AiStore);
  const router = inject(Router);
  if(aiStore.userLogued() === null){
    router.navigate(['/login']);
    return false;
  }
  return true;
};
