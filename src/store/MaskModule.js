export default {
    state(){
        return {
            MaskStatus: "Visible",
            isSearchShown: true,
        }

    },
    mutations:{
        ChangeStatus(state, visible){
            state.MaskStatus = visible;
        }
    },
    actions:{
        ChangeVisible(context, visible) {
            context.commit('ChangeVisible', visible);
        }
    }
}