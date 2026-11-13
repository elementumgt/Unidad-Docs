// localStorage puede lanzar (SecurityError) si el navegador bloquea el
// almacenamiento del sitio. Las preferencias son una comodidad: sin
// almacenamiento, el sitio funciona igual con los valores por defecto.

export function readSetting(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function saveSetting(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Sin almacenamiento la preferencia vale solo para esta visita.
  }
}
