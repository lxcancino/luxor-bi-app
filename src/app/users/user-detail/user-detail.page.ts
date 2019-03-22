import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss']
})
export class UserDetailPage implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private service: UsersService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = this.service.getUser(params.get('userId'));
    });
  }

  deleteUser() {
    this.service.deleteUser(this.user.id.value);
  }
}
