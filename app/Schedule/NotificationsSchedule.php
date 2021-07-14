<?php

namespace App\Schedule;
use App;
use App\User;
use App\UserDocument;
use App\Notice;

class NotificationsSchedule
{
    public function __invoke()
    {
        $documents = UserDocument::whereRaw('DATEDIFF(validity, NOW()) <= 20')->get();

        foreach ($documents as $document) {
            $worker = User::findOrFail($document->user_id);
			$user = User::where('role', 'hs_specialis')->first();

            Notice::create([
                'user_id' => $user->id,
                'title' => 'Заканчивается срок удостоверения',
                'content' => "У работника {$worker->lname} {$worker->fname} {$worker->mname} {$document->validity} закончится удостоверение {$document->title}"
            ]);
        }
    }
}