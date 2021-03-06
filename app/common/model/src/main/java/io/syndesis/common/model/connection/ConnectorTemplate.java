/*
 * Copyright (C) 2016 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.syndesis.common.model.connection;

import java.io.Serializable;
import java.util.Map;
import java.util.Optional;

import io.syndesis.common.model.Kind;
import io.syndesis.common.model.WithId;
import io.syndesis.common.model.WithName;
import io.syndesis.common.model.WithProperties;

import org.immutables.value.Value;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@Value.Immutable
@JsonDeserialize(builder = ConnectorTemplate.Builder.class)
@SuppressWarnings("immutables")
public interface ConnectorTemplate extends WithId<ConnectorTemplate>, WithName, WithProperties, Serializable {

    class Builder extends ImmutableConnectorTemplate.Builder implements WithPropertiesBuilder<Builder> {
        // make ImmutableConnectorTemplate.Builder accessible
    }

    default Builder builder() {
        return new Builder().createFrom(this);
    }

    String getComponentScheme();

    Optional<ConnectorGroup> getConnectorGroup();

    Map<String, ConfigurationProperty> getConnectorProperties();

    String getDescription();

    String getIcon();

    @Override
    @Value.Default
    default Kind getKind() {
        return Kind.ConnectorTemplate;
    }

    @Override
    default ConnectorTemplate withId(final String id) {
        return builder().id(id).build();
    }

}
