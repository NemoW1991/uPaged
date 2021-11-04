import { setShiftsAction } from "../actions/ShiftAction";
import { Dispatch } from "redux";
import { ShiftsAction } from "../types/Shift";
import { getAllShifts } from "../../lib/api";

export const getShifts =
  (startDate: string = "", direction: number = 0) =>
  async (dispatch: Dispatch<ShiftsAction>) => {
    const res = await getAllShifts(startDate, direction);
    console.log(res.data)
    dispatch(setShiftsAction(
      res.data[0].startDateOne, res.data[1].startDateTwo,      
      res.data[2].invitedShifts,res.data[2].uninvitedShifts,
      res.data[3].invitedShifts,res.data[3].uninvitedShifts,
    ));
    return res.data;
  };
