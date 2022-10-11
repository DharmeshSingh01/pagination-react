const paginate = (folloers) => {
  const itemPerPage = 9;
  const pages = Math.ceil(folloers.length / itemPerPage);

  // console.log(pages);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage;
    return folloers.slice(start, start + itemPerPage);
  });
  return newFollowers;
};
export default paginate;
