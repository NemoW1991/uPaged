import { setShiftsAction } from "../actions/ShiftAction";
import { Dispatch } from "redux";
import { ShiftsAction } from "../types/Shift";
import { getAllShifts } from "../../lib/api";

export const getShifts =
  (startDate: string = "", days: number = 1) =>
  async (dispatch: Dispatch<ShiftsAction>) => {
    const res = await getAllShifts(startDate, days);
    dispatch(setShiftsAction(
      res.data[0].start, res.data[1].end,      
      res.data[2],res.data[3],
      res.data[4],res.data[5]
    ));
    return res.data;
  };
