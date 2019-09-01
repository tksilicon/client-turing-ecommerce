import { Injectable } from '@angular/core';

@Injectable()
export class DeptcategoryServiceMock {
	

	getAllDepts(): Array<{}> {
		return [
			{
				departmentId: '1',
				description: 'usersurname1',
				name: 'regional'
			}
		];
	}
}

