# Takes an object and renders it as JSON
# frozen_string_literal: true

module Response
  def json_response(object, status = :ok)
    render json: object, status: status
  end
end
