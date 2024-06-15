<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Nette\Utils\DateTime;

class UserResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'                => $this->id,
            'name'              => $this->name,
            'email'             => $this->email,
            'created_at'        => (new DateTime($this->created_at))->format('Y-m-d H:i:s'),
            'token'             => $this->createToken("Token")->plainTextToken,
            'roles'             => $this->roles->pluck('name') ?? null,
            'roles.permissions' => $this->getPermissionsViaRoles()->pluck(['name']) ?? [],
            'permissions'       => $this->permissions->pluck('name') ?? []
        ];
    }
}
