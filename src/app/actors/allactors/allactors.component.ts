import { Component, OnInit } from "@angular/core";
import { GetActorsService } from "src/app/services/get/get-actors.service";

@Component({
  selector: "app-allactors",
  templateUrl: "./allactors.component.html",
  styleUrls: ["./allactors.component.css"],
})
export class AllactorsComponent implements OnInit {
  posts: any;

  constructor(private service: GetActorsService) {}

  ngOnInit(): void {
    this.service.getAllActors().subscribe((response) => {
      this.posts = response;
      console.log(response);
    });
  }

  getActorName(actor_id: number) {
    for (let actor of this.posts) {
      if (actor.id === actor_id) {
        console.log(actor.name);
        return actor.actorName;
      }
    }
    return "";
  }
}

/*
*********************************
getActorName(actor_id: number) {
    for (let actor of this.posts) {
      if (actor.id === actor_id) {
        console.log(actor.name);
        return actor.actorName;
      }
    }
    return "";
  }
**********************************



This was done already. I want to organize by movie_title list of actors in it.
For example:

Movie1: actor1, actor2, actor3
Movie2: actor1, actor2, actor3

Rich poor girl:
  Actor: Mimi Rogers
  Actor: John Stiles

Live Forever:
  Actor: Roger Cenk
  Actor: Jimmy Hill

No repeats of movie titles.



*/
