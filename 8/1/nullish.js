// nullish coalescing operator ??

if(true && true) console.log('YES')
// YES

if(true && undefined) console.log('YES')
//undefined

if(null || true) console.log('YES')
// YES

if(NaN || true) console.log('YES')
// YES

if(true ?? true) console.log("YES")
//YES
if(true ?? null) console.log("YES")
//YES
if(true ?? undefined) console.log("YES")
//YES
if(null ?? true) console.log("YES")
//YES
if(undefined ?? true) console.log("YES")
//YES
if(true ?? false) console.log("YES")
//YES

//flage:
if(false ?? true) console.log("YES")
//undefined