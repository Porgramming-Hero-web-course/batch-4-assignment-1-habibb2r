{

    interface Profile {
        name: string;
        age: number;
        email : string;
    }

    const updateProfile = (profileData: Profile, updateData: Partial<Profile>): Profile =>{
        const update : Profile = { ...profileData, ...updateData}
        return update
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 28, email: 'habibb2r@b2r.com' }));
}