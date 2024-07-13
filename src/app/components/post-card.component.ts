import { Component, Input } from '@angular/core';
import { Post } from '../models/post';
import { Comment } from '../models/post';
import { YoutubeRepository } from '../services/youtube-repository';
export var staticId:number=124;
@Component({
  selector: 'youtube-post-card',
  template: `
    <mat-card fxLayout="column">
      <mat-card-title>{{post.title}}</mat-card-title>
      <mat-card-content fxLayout="column">
        <div style="margin: 5px" fxLayout="row" fxLayoutGap="30px" *ngFor="let comment of post.comments">
          <p *ngIf=" selectedCommentId!=comment.id ">{{comment.description}}</p>       
           <mat-form-field *ngIf="mode=='edit' && selectedCommentId==comment.id">
            <input  [(ngModel)]="commentDescription" matInput placeholder="Enter your Comment"/>
         <button (click)="editComment(comment)" mat-button color="accent">Update</button>
         <button (click)="mode='add';selectedCommentId=null" mat-button color="accent">Cancel</button>
            </mat-form-field>
          <button *ngIf="mode=='add'" (click)="mode='edit';selectedCommentId=comment.id" mat-button color="accent">Edit</button>
          <button *ngIf="mode=='add'" (click)="deleteComment(comment.id)" mat-button color="warn">Delete</button>
        </div>
        <div fxFlex="row" fxLayoutGap="30px" *ngIf= "mode =='add'">
          <mat-form-field>
            <input  [(ngModel)]="commentDescription" matInput placeholder="Enter your Comment"/>
          </mat-form-field>
          <button (click)="addComment()" mat-raised-button color="primary">Add</button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      width: 50%;
      margin: 20px;
    }
       .mdc-card{background-color: #fcd8f3 !important}


    mat-card {
      width: 50%;
      margin: 20px;
    }
    
  `]
})

export class PostCardComponent {
  
  @Input() post!: Post;
  commentDescription = '';
  mode: string = 'add';
  selectedCommentId: any;

  constructor(private youtubeRepository: YoutubeRepository) {
  }

  addComment() {
    staticId = staticId+1;
    const comment: Comment = {
      id: staticId,
      description: this.commentDescription
    };
    this.youtubeRepository.addComment(comment, this.post.id);
  }

  editComment(comment: Comment) {
    this.mode = 'edit';
      const comment2: Comment = {
      id: comment.id,
      description: this.commentDescription
    };
   
    this.youtubeRepository.updateComment(comment2, this.post.id);
  }

  deleteComment(id: any) {
    this.youtubeRepository.deleteComment(id, this.post.id);
  }
}
