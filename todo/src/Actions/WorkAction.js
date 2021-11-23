//We Need TWO THINGS

// 1. ACTION TYPES = STRING/XARAF LAGU GARANAAYO WAXA DHICI DOONO

export const EDIT_WORK = "EDIT_WORK"
export const TOGGLE_EDITTING = "TOGGLE_EDITTING"

// 2. ACTION CREATORS - Waa function soo celinaayo object, kaas oo hayo wixii la badali lahaa iyo habka loo badali lahaa

export const editWork = (work) => {
  return {
    type: EDIT_WORK,
    payload: work
    
  }
}

export const toggleEdit = () => {
  return {
    type: TOGGLE_EDITTING
  }
}