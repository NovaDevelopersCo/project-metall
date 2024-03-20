import type { TDispatch, TStore } from "./store";

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const useAppDispatch: () => TDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector