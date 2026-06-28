
'use server'

import { headers } from "next/headers"
import { auth } from "../auth"
import { redirect } from "next/navigation"




export const getSessionData = async ()  => {
 const session =  await auth.api.getSession({
    headers: await headers() 
})

  return session?.user || null
}

export const getUserToken = async () => {
  try {
    const reqHeaders = await headers();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/auth/token`, { headers: reqHeaders });
    if (res.ok) {
      const data = await res.json();
      return data.token;
    }
  } catch (err) {
    console.error("Failed to get JWT token", err);
  }
  return null;
}

export const requireRole = async (role) => {
  const user = await getSessionData()
  if(user.role !== role){
    return redirect('/unauthorized')
  }
}