
const uri = process.env.REACT_APP_BACKEND_URI;

export const referFriend = async(refData)=>{
    try {
        const response=await fetch(`${uri}/referrals`,{
           method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(refData)
        })
        return await response.json();
    } catch (error) {
        throw new Error(error);
    }
}