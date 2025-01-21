import { Notify } from 'quasar';
type posType =  'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'left' | 'right' | 'center' ;

export function NotifySuccess(message: string, pos: posType = 'bottom'){
   Notify.create({
    message: message,
    position: pos,
    icon: 'check_circle',
    iconColor: 'white',
    textColor: 'white',
    color: 'green-10',
    timeout: 3000
  })
}

export function NotifyError(message: string, pos: posType = 'bottom'){
  Notify.create({
    message: message,
    position: pos,
    icon: 'error',
    iconColor: 'red-13',
    textColor: 'red-13',
    color: 'red-4',
    timeout: 3000
  })
}