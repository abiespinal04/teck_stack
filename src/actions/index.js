export const selectLibrary = (librayId) => {
    return {
        type:'select_library',
        payload:librayId
    }
}