export const pagination = (page?: string,limit?: string) => {
    const take = limit ? parseInt(limit.toString(), 10) : 10;
    const skip = page ? (parseInt(page.toString(), 10) - 1) * take : 0;

    return { take, skip };
}