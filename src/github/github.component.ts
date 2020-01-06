import { Component } from '@angular/core';
import { GithubService } from 'src/services/Github.service';

@Component({
	selector: 'github-root',
	templateUrl: './github.component.html',
	styleUrls: ['./github.component.scss'],
})
export class GithubComponent {
	shortGithubInfo: any;

	public constructor(private githubService: GithubService) {}

	async ngOnInit(): Promise<void> {
		this.shortGithubInfo = await this.githubService.getShortRepositoryInfo();
		console.log(this.shortGithubInfo);
		console.log('aaaaa');
	}
}
