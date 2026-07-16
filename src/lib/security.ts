import{createHash,timingSafeEqual}from"node:crypto";import{NextRequest,NextResponse}from"next/server";
const buckets=new Map<string,{count:number;reset:number}>();
export function clientIp(req:NextRequest){return(req.headers.get("x-forwarded-for")?.split(",")[0]||req.headers.get("x-real-ip")||"unknown").trim()}
export function ipHash(req:NextRequest){return createHash("sha256").update(`${process.env.IP_HASH_SALT||"development-only"}:${clientIp(req)}`).digest("hex")}
export function rateLimit(req:NextRequest,limit=10,windowMs=60_000){const key=`${clientIp(req)}:${req.nextUrl.pathname}`;const now=Date.now();const value=buckets.get(key);if(!value||value.reset<now){buckets.set(key,{count:1,reset:now+windowMs});return null}value.count++;if(value.count>limit)return NextResponse.json({error:"Too many requests. Please try again later."},{status:429,headers:{"Retry-After":String(Math.ceil((value.reset-now)/1000))}});return null}
export function sameOrigin(req:NextRequest){const origin=req.headers.get("origin");if(!origin)return process.env.NODE_ENV!=="production";return origin===req.nextUrl.origin}
export function secureEqual(a:string,b:string){const aa=Buffer.from(a),bb=Buffer.from(b);return aa.length===bb.length&&timingSafeEqual(aa,bb)}
export function cleanText(value:string,max=2000){return value.replace(/[<>]/g,"").trim().slice(0,max)}
