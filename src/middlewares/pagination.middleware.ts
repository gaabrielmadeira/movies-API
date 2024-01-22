import { NextFunction, Request, Response } from "express";
import { PaginationParams } from "../interfaces";

const pagination = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const queryPage: number = Number(req.query.page);
  const queryPerPage: number = Number(req.query.perPage);

  const page: number = Number.isInteger(queryPage) && queryPage > 0 ? queryPage : 1;
  const perPage: number = Number.isInteger(queryPerPage) && queryPerPage > 0 && queryPerPage <= 5 ? queryPerPage : 5;

  const baseUrl: string = "http://localhost:3000/movies";
  const prevPage: string = `${baseUrl}?page=${page - 1}&perPage=${perPage}`;
  const nextPage: string = `${baseUrl}?page=${page + 1}&perPage=${perPage}`;

  const queryOrder: any = req.query.order;
  const querySort: any = req.query.sort;

  const orderOpts: string[] = ["asc", "desc"];
  const sortOpts: string[] = ["price", "duration"];

  let sort: string;
  let order: string;

  if(!sortOpts.includes(querySort)){
    sort = "id";
  } else {
    sort = querySort;
  };

  if(!querySort || !orderOpts.includes(queryOrder)){
    order = "asc";
  } else {
    order = queryOrder;
  };

  const pagination: PaginationParams = {
    page: perPage * (page - 1),
    perPage,
    prevPage,
    nextPage,
    sort,
    order
  };

  res.locals = { ...res.locals, pagination }

  return next();
};

export default pagination;