import Vuex from 'Vuex';

import Vue from 'Vue';

Vue.use(Vuex)

import data from '../api/data'
export default new Vuex.Store({
    state: {
        students: [],
        teamA: [],
        teamB: []
    },
    getters:{

    },
    actions:{
        getStudents(context){
            context.commit('setStudents')
        },
        addTeamMember(context, data){
            context.commit('pushMemberToTeam', data);
            context.commit('changeSelectedState', data.index);
        }
    },
    mutations:{
        setStudents(state){
            state.students = data.getStudents()
        }, 
        pushMemberToTeam(state,data) {
            if (data.type === 'A'){
            state.teamA.push(state.students[data.index])
        }else{
            state.teamB.push(state.students[data.index])
        }    
        },
        changeSelectedState (state, index){
            state.students[index].selected = true;
        }
    }
})
