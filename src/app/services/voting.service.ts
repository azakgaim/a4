import { Injectable } from '@angular/core';

// models
import { ISession } from '../models/event.model'

@Injectable()
export class VotingService {
  addVoter(session: ISession, userName: string) {
    session.voters.push(  userName );
  }

  deleteVoter(session: ISession, userName: string) {
    session.voters = session.voters.filter(voter => { return voter !== userName; });
  }

  userHasVoted(session: ISession, userName: string) {
    return session.voters.some(voter => {return voter === userName});
  }
}
